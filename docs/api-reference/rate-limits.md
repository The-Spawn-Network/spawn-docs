### **Overview**

To ensure **fair usage, scalability, and security**, Spawn enforces rate limits on API requests. This prevents excessive usage and maintains system stability. This section covers:

- **Rate limits per API tier**
- **Handling rate limit errors**
- **Best practices for request optimization**
- **Error handling guidelines**

---

## **1️⃣ Rate Limits by API Tier**

Spawn categorizes users into different **API access tiers**, each with predefined request limits.

| **Plan**   | **Requests Per Minute (RPM)** | **Requests Per Hour (RPH)** | **Burst Limit**          |
| ---------- | ----------------------------- | --------------------------- | ------------------------ |
| Free       | 30 RPM                        | 1,000 RPH                   | 50 requests per burst    |
| Developer  | 100 RPM                       | 5,000 RPH                   | 150 requests per burst   |
| Business   | 500 RPM                       | 20,000 RPH                  | 750 requests per burst   |
| Enterprise | 2,000 RPM                     | 100,000 RPH                 | 5,000 requests per burst |

- **Burst Limit**: The number of requests that can be sent in quick succession before hitting rate limiting.

---

## **2️⃣ Rate Limit Headers**

Every API response includes rate limit headers to help track usage.

| **Header**                 | **Description**                                     | **Example Value** |
| -------------------------- | --------------------------------------------------- | ----------------- |
| `X-RateLimit-Limit`        | Maximum requests allowed in the current window      | `1000`            |
| `X-RateLimit-Remaining`    | Remaining requests in the current window            | `450`             |
| `X-RateLimit-Reset`        | Unix timestamp for when the rate limit resets       | `1710000000`      |
| `Retry-After` (if limited) | Seconds to wait before retrying after hitting limit | `60`              |

Example API response headers:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 450
X-RateLimit-Reset: 1710000000
```

---

## **3️⃣ Handling Rate Limit Errors**

If you exceed the allowed request rate, the API will return a **429 Too Many Requests** response.

### **Error Response**

```json
{
  "error": "rate_limit_exceeded",
  "message": "You have exceeded your request limit. Please wait before making more requests.",
  "retry_after": 60
}
```

- `retry_after`: The number of **seconds** to wait before retrying.

### **How to Handle Rate Limits**

- **Check Headers**: Monitor the `X-RateLimit-Remaining` value.
- **Backoff Strategy**: Implement an **exponential backoff**:
  - Wait 1s, then retry.
  - If still rate-limited, wait 2s, then retry.
  - Continue doubling the wait time until successful.
- **Optimize Requests**: Use batch processing and caching.

#### **Example: Exponential Backoff in Python**

```python
import time
import requests

url = "https://thespawnnetwork.com/api/v1/agents"
headers = {"Authorization": "Bearer YOUR_API_KEY"}

def make_request_with_backoff():
    wait_time = 1
    while True:
        response = requests.get(url, headers=headers)
        if response.status_code == 429:
            retry_after = response.headers.get("Retry-After", wait_time)
            print(f"Rate limited. Retrying in {retry_after} seconds...")
            time.sleep(int(retry_after))
            wait_time *= 2  # Exponential backoff
        else:
            return response.json()

data = make_request_with_backoff()
print(data)
```

---

## **4️⃣ Common API Errors & Responses**

Apart from rate limits, Spawn APIs may return structured error responses. Below are the most common errors.

| **HTTP Status Code**          | **Error Message**              | **Cause**                         |
| ----------------------------- | ------------------------------ | --------------------------------- |
| **400** Bad Request           | `"Invalid request parameters"` | Malformed or missing fields       |
| **401** Unauthorized          | `"Invalid API key"`            | Missing or invalid authentication |
| **403** Forbidden             | `"Access denied"`              | Insufficient permissions          |
| **404** Not Found             | `"Resource not found"`         | Invalid URL or missing resource   |
| **429** Too Many Requests     | `"Rate limit exceeded"`        | Too many API calls                |
| **500** Internal Server Error | `"Unexpected error"`           | Server-side issue                 |

### **Example Error Response**

```json
{
  "error": "unauthorized",
  "message": "Invalid API key provided."
}
```

---

## **5️⃣ Best Practices to Avoid Rate Limits**

- **Use API Pagination**: Request only what you need.
- **Leverage Webhooks**: Instead of polling, subscribe to real-time updates.
- **Optimize Calls**: Cache frequent requests to avoid unnecessary API calls.
- **Batch Requests**: Instead of multiple calls, send bulk operations.

---

## **Conclusion**

Spawn's rate limits ensure **fair usage and system stability**. Developers should implement **proper error handling, caching, and backoff strategies** to optimize their API integration.
