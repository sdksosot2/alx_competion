from django.db import models

class UsageLog(models.Model):
    feature_name = models.CharField(max_length=100)
    details = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.feature_name} @ {self.created_at:%Y-%m-%d %H:%M}"
