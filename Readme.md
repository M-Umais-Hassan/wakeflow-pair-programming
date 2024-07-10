**Clone project**
```
git clone https://github.com/M-Umais-Hassan/wakeflow-pair-programming.git
```

**Create .env FILE with following content in it**
```
OPEN_AI_KEY=YOUR_API_KEY
```

**Deployed Link**
```
https://wakeflow-pair-programming.vercel.app/
```

**Routes**
```
https://wakeflow-pair-programming.vercel.app/prompt
```

**Curl for prompt api**
```
curl --location 'https://wakeflow-pair-programming.vercel.app/prompt' \
--header 'Content-Type: application/json' \
--data '{
    "message": "write code for getting first monday of the month of July, 2024 and use dayjs library"
}'
```
