import requests
import os
from dotenv import load_dotenv

# Function that uses WISE API to get excange rates


def get_conversion_rate(source: str, target: str):
    # URL of the webpage you want to fetch
    url = f"https://api.sandbox.transferwise.tech/v1/rates?source={
        source}&target={target}"

    # Load .env file and get API Token
    load_dotenv()
    token = os.getenv("WISE_TOKEN")
    headers = {
        'Authorization': f'Bearer {token}'
    }

    # Send a GET request
    response = requests.get(url, headers=headers)

    # Check the status code
    if response.status_code == 200:
        return response.json()[0]['rate']
    else:
        print(f"Failed to GET content. Status code: {response.status_code}")


if __name__ == '__main__':

    source = 'EUR'
    target = 'USD'
    print(get_conversion_rate(source, target))
