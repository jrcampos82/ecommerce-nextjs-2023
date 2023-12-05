/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '@/constans';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51OIdLXAgL8cqJmRqORg6cEIjvFTPgKBo7qFTliOe3ZlLpDdDLe6FH6hAlSipkEuDuPcQbhdOZHtrjZxktTN9b376006qKm1Box'
);

interface CheckoutModalProps {
  showCheckoutModal: boolean;
  setShowCheckoutModal: any;
  total: number;
}

function CheckoutModal({
  showCheckoutModal,
  setShowCheckoutModal,
  total,
}: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const loadClientSecret = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${API_URL}/payment`, {
        amount: total,
        currency: 'usd',
      });

      setClientSecret(data);
    } catch (error: any) {
      notification.error({
        message: 'Error on loadClient',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClientSecret();
  }, []);

  return (
    <Modal
      title={
        <div className="flex justify-between items-center font-bold text-xl">
          <span>Checkout</span>
          <span>Total: ${total}</span>
        </div>
      }
      open={showCheckoutModal}
      onCancel={() => setShowCheckoutModal(false)}
      centered
      closable={false}
      footer={false}
    >
      <hr className="my-5" />
      <div className="mt-5">
        {stripePromise && clientSecret && (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret: clientSecret }}
          >
            <CheckoutForm
              total={total}
              setShowCheckoutModal={setShowCheckoutModal}
            />
          </Elements>
        )}
      </div>
    </Modal>
  );
}

export default CheckoutModal;
