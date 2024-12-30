# Generated by Django 5.1.2 on 2024-12-28 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shopApp", "0002_userdb"),
    ]

    operations = [
        migrations.CreateModel(
            name="OrderDb",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("Name", models.CharField(blank=True, max_length=200, null=True)),
                ("Email", models.EmailField(blank=True, max_length=200, null=True)),
                ("Address", models.CharField(blank=True, max_length=200, null=True)),
                ("Mobile", models.CharField(blank=True, max_length=200, null=True)),
                ("State", models.CharField(blank=True, max_length=200, null=True)),
                ("Pin", models.IntegerField(blank=True, null=True)),
                ("TotalPrice", models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
