from django.contrib import admin
from .models import UsageLog

@admin.register(UsageLog)
class UsageLogAdmin(admin.ModelAdmin):
    list_display = ('feature_name', 'created_at')
    readonly_fields = ('created_at',)
