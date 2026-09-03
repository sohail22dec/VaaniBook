import asyncio
import sys
from app.services.sarvam_outbound import trigger_outbound_call

async def main():
    phone = sys.argv[1] if len(sys.argv) > 1 else None
    print("Initiating call...")
    try:
        result = await trigger_outbound_call(phone)
        print("Call placed successfully:", result)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    asyncio.run(main())
