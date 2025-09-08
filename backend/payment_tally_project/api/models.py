from django.db import models

# Create your models here.
class Contributors(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name + ' ' + self.last_name


class Contributions(models.Model):
    contributor = models.ForeignKey(Contributors, on_delete=models.CASCADE, related_name='contributions')
    payment = models.IntegerField()
    is_paid = models.BooleanField(default=False)
    date_required = models.DateField(auto_now_add=True)
    date_paid = models.DateField()

class TotalBalance(models.Model):
    balance_amount = models.IntegerField()


class DeductionHistory(models.Model):
    balance = models.ForeignKey(TotalBalance, on_delete=models.CASCADE, related_name="balance")

    amount = models.IntegerField()
    deduction_date = models.DateField(auto_now_add=True)


# class Balance(models.Model):
#     balance = models.IntegerField()


# class Transaction(models.Model):
#     TRANSACTION_TYPE = [
#         ('IN', 'Income'),
#         ('EX', 'Expense'),
#     ]

#     transaction_amount = models.IntegerField()
#     transaction_type = models.TextChoices(max_length=3, choices=TRANSACTION_TYPE)
#     transaction_history = models.DateField(auto_now_add=True)
