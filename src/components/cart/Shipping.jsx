import React, { useState } from 'react'
import { Country, State } from 'country-state-city'
import Popup from 'reactjs-popup'

const Shipping = () => {
  const [country, setCountry] = useState('IN')
  const [state, setState] = useState('')

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>

        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>

          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>

          <div>
            <label>Country</label>

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>

              {Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>State</label>

            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">State</option>

              {State.getStatesOfCountry(country).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>

          <div>
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter Phone Number" />
          </div>

          <Popup
            trigger={<button type="button">Confirm Order</button>}
            position="right center"
          >
            <div
              style={{
                color: 'red',
                position: 'absolute',
                top: '50%',
                right: '100%',
                transform: 'translateY(-50%)',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  )
}

export default Shipping
