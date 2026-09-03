import httpx
from app.config import settings

OUTBOUND_URL = (
    f"https://apps.sarvam.ai/api/outbounds/v1/orgs/"
    f"{settings.sarvam_org_id}/workspaces/{settings.sarvam_workspace_id}/outbounds"
)

def format_phone(phone: str) -> str:
    cleaned = phone.strip().replace(" ", "").replace("-", "")
    if not cleaned.startswith("+"):
        return f"+91{cleaned}" if len(cleaned) == 10 else f"+{cleaned}"
    return cleaned

async def trigger_outbound_call(recipient_phone: str | None = None) -> dict:
    phone = recipient_phone or settings.default_recipient_phone
    if not phone:
        raise ValueError("Recipient phone number is required.")

    payload = {
        "app_config": {
            "app_id": settings.sarvam_app_id,
            "app_version": settings.sarvam_app_version,
            "connection_config": {
                "connection_id": settings.sarvam_connection_id,
                "agent_phone_number": format_phone(settings.sarvam_agent_phone),
            },
        },
        "user_config": {
            "user_phone_number": format_phone(phone),
        },
    }

    headers = {
        "Content-Type": "application/json",
        "X-API-Key": settings.sarvam_api_key,
    }

    async with httpx.AsyncClient(timeout=15.0) as client:
        response = await client.post(OUTBOUND_URL, json=payload, headers=headers)
        response.raise_for_status()
        return response.json()
