from django.db import models
from django.contrib.auth.models import User


class PokemonTeam(models.Model):
    team_name = models.CharField(max_length=64)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="teams", null=True, default=None)
    
    def __str__(self):
        return f"Pokemon Team: {self.team_name}"

class Pokemon(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=255)
    type = models.CharField(max_length=64, null=True)

    def __str__(self):
        return f"Pokemon: {self.name}"

# can there be multiple pokemon in multiple teams? yes
# can pokemon teams have multiple pokemon? yes