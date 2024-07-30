from django.db import models

class Idea(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.name