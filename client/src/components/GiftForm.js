import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_GIFT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const GiftForm = () => {
    const [giftFormData, setGiftFormData] = useState({giftName: "", price: "", giftLink: "",})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGiftFormData({ ...giftFormData, [name]: value });
      };
    

    return (
        <>
         <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="giftName"
                placeholder="New Wishlist Name"
                value={giftName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleInputChange}
              ></textarea>
              </div>

              <div className="col-12 col-lg-9">
              <textarea
                name="giftPrice"
                placeholder="New Wishlist Name"
                value={price}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleInputChange}
              ></textarea>
              </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="giftLink"
                placeholder="New Wishlist Name"
                value={giftLink}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Gift
              </button>
            </div>
        </form>
        </>
    )
};

export default GiftForm;

