# Generated by Django 3.2.4 on 2023-05-17 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=180)),
                ('last_name', models.CharField(max_length=180)),
                ('telephone', models.CharField(max_length=180)),
            ],
        ),
    ]
