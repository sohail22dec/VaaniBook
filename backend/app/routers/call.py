from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.sarvam_outbound import trigger_outbound_call

router = APIRouter(prefix="/api/call", tags=["Call"])

class CallRequest(BaseModel):
    phone_number: str | None = None

@router.post("")
async def make_call(request: CallRequest = CallRequest()):
    try:
        data = await trigger_outbound_call(request.phone_number)
        return {"status": "success", "data": data}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
