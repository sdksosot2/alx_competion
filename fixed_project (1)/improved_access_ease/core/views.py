from django.shortcuts import render
from django.http import JsonResponse
from .models import UsageLog

def home(request):
    return render(request, 'core/home.html')

def tts_tool(request):
    return render(request, 'core/tts.html')

# simple API to record usage (demo)
def record_usage(request):
    feature = request.GET.get('feature', 'unknown')
    details = request.GET.get('details', '')
    log = UsageLog.objects.create(feature_name=feature, details=details)
    return JsonResponse({'status':'ok','id': log.id})
