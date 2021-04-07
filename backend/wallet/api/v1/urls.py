from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    PaymentTransactionViewSet,
    TaskerPaymentAccountViewSet,
    TaskerWalletViewSet,
    PaymentMethodViewSet,
    CustomerWalletViewSet,
)

router = DefaultRouter()
router.register("taskerwallet", TaskerWalletViewSet)
router.register("customerwallet", CustomerWalletViewSet)
router.register("paymenttransaction", PaymentTransactionViewSet)
router.register("taskerpaymentaccount", TaskerPaymentAccountViewSet)
router.register("paymentmethod", PaymentMethodViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
