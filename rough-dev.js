import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';
// import { Cookies } from 'react-cookie';
import { injectIntl } from 'react-intl';
import './SAPReserveSlot.scss';
import Moment from 'moment';
import Dropdown from 'react-dropdown';
import { SaviyntRangePicker } from 'savyint-core-ui/commoncomponents';
import 'react-dropdown/style.css';

// const cookies = new Cookies();
const dat = [1, 2, 3, 4, 5, 6];
const options = [
  { value: 48, label: '48 hours' },
  { value: 24, label: '24 hours' },
  { value: 12, label: '12 hours' },
];
const SAPReserveSlot = props => {
  const [firstSlotSelected, setFirstSlotSelected] = useState(-1);
  const [secondSlotSelected, setsecondSlotSelected] = useState(-1);
  const [rangeEnabled, setRangeEnabled] = useState(false);
  const [currMousePosi, setCurrMousePosi] = useState(-1);
  const [slotItems, setSlotItems] = useState({ value: 48, label: '48 hours' });
  const startTime = new Moment().add(1, 'hours').set({ minutes: 0, seconds: 0 });

  const wrapperRef = useRef(null);
  const fromDateTime = new Moment();
  const toDateTime = new Moment();
  const instanceFromDate = fromDateTime.clone().set({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const instanceFromTime = {
    hours: fromDateTime.get('hours'),
    minutes: fromDateTime.get('minutes'),
    seconds: fromDateTime.get('seconds'),
  };
  const instanceToDate = toDateTime.clone().set({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const instanceToTime = {
    hours: toDateTime.get('hours'),
    minutes: toDateTime.get('minutes'),
    seconds: toDateTime.get('seconds'),
  };

  useOnClickOutside(wrapperRef, () => {});

  const slotSelected = index => {
    if (firstSlotSelected === -1) {
      setFirstSlotSelected(index);
      setRangeEnabled(true);
    } else if (secondSlotSelected === -1 && firstSlotSelected !== index) {
      setsecondSlotSelected(index);
      setRangeEnabled(false);
    } else {
      setsecondSlotSelected(-1);
      setFirstSlotSelected(index);
      setRangeEnabled(true);
    }
  };

  const det = Array(slotItems.value / 3).fill(4);
  const items = det.map((item, key) => {
    return (
      <div>
        <div className="d-flex slot-parent">
          {dat.map((itm, index) => {
            const itemIndex = key * dat.length + index;
            let selSlot = false;
            let applyBg = false;
            let finalselectSlot = false;
            if (firstSlotSelected === itemIndex || secondSlotSelected === itemIndex) {
              selSlot = true;
            } else if (rangeEnabled && currMousePosi !== -1) {
              if (
                firstSlotSelected < currMousePosi &&
                itemIndex > firstSlotSelected &&
                itemIndex < currMousePosi
              ) {
                applyBg = true;
              } else if (
                firstSlotSelected > currMousePosi &&
                itemIndex < firstSlotSelected &&
                itemIndex > currMousePosi
              ) {
                applyBg = true;
              }
            } else if (secondSlotSelected !== -1) {
              if (
                firstSlotSelected > secondSlotSelected &&
                itemIndex < firstSlotSelected &&
                itemIndex > secondSlotSelected
              ) {
                finalselectSlot = true;
              } else if (
                firstSlotSelected < secondSlotSelected &&
                itemIndex > firstSlotSelected &&
                itemIndex < secondSlotSelected
              ) {
                finalselectSlot = true;
              }
            }

            return (
              <div
                role="presentation"
                className={
                  selSlot
                    ? 'slot-selected'
                    : applyBg
                    ? 'slot-range-select'
                    : finalselectSlot
                    ? 'final-slot'
                    : 'slot'
                }
                onClick={() => {
                  slotSelected(itemIndex);
                }}
                onMouseOver={() => {
                  if (rangeEnabled) {
                    setCurrMousePosi(itemIndex);
                  }
                }}
                onMouseLeave={() => {
                  setCurrMousePosi(-1);
                }}
              />
            );
          })}
        </div>
        <div className="slot-time-label">
          {startTime
            .clone()
            .add(key * 3, 'hours')
            .format('h:mm a')}
        </div>
      </div>
    );
  });

  let timeDiff = 0;
  let firstslot = -1;
  let secondslot = -1;
  if (secondSlotSelected !== -1) {
    if (firstSlotSelected > secondSlotSelected) {
      firstslot = secondSlotSelected;
      secondslot = firstSlotSelected;
    } else {
      firstslot = firstSlotSelected;
      secondslot = secondSlotSelected;
    }
    timeDiff = (secondslot - firstslot + 1) * 0.5;
  }

  return (
    <div className="sap-reserve-slot-container">
      <div className="modal-backdrop fade show" />
      <div
        className="modal fade show"
        id="confirmModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" ref={wrapperRef}>
            <div className="modal-header">
              <div className="modal-subheader">
                <h5 className="modal-title" id="exampleModalLabel">
                  Reserve A Slot
                </h5>
                <p className="priv-role-access-subtitle">
                  request for the
                  <b> Finance Audit</b>
                  <span className="priv-role-access-subtitle"> Emergency ID Pro under System </span>
                  <b>SAP Finance</b>
                </p>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  props.setShowPrivilegeRoleModal(false);
                }}
              >
                <span aria-hidden="true">
                  <i className="la la-close close-icon" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="timeframe">
                <div className="timeframe-title">Select Timeframe for ID Assignment</div>
                <div className="timeframe-subtitle">
                  This ID is not requestable for now, after this step you can select a slot for
                  future access.
                </div>

                <SaviyntRangePicker
                  instanceFromDate={instanceFromDate}
                  instanceToDate={instanceToDate}
                  instanceFromTime={instanceFromTime}
                  instanceToTime={instanceToTime}
                  dateFormat="MMM DD, YYYY"
                  // onChange={range => {}}
                />
              </div>

              <div className="sap-slot-title">Reserve a slot for your next usage</div>
              <div className="sap-slot-subtitle">
                You can only select time within your ID Assignment timeframe
              </div>

              <div className="slot-selection">
                <div className="future-parent">
                  <div className="see-future">See slots in the future</div>
                  <Dropdown
                    id="hours_categories"
                    options={options}
                    onChange={e => {
                      setSlotItems(e);
                    }}
                    aria-label="dropdown"
                    value={slotItems}
                  />
                </div>
                <div className="d-flex slot-picker">{items}</div>
                <div className="slot-selectddate">
                  {secondSlotSelected !== -1
                    ? `${timeDiff} hours selected from
              ${startTime
                .clone()
                .add(firstslot * 0.5, 'hours')
                .format('MMM DD, YYYY h:mm a')} - ${startTime
                        .clone()
                        .add(firstslot * 0.5 + timeDiff, 'hours')
                        .format('MMM DD, YYYY h:mm a')}`
                    : ''}
                </div>
              </div>
              <div className="control-label sap-slot-busjusti">Business Justification</div>

              <textarea className="form-control sap-slot-textarea" />
            </div>

            <div className="slot-footer">
              <button className="btn btn-ingrid btn-not-selected " type="submit">
                Confirm Selection
              </button>

              <button className="btn btn-ingrid btn-not-selected cancel-margin" type="submit">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SAPReserveSlot.propTypes = {
  // intl: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     locale: PropTypes.string.isRequired,
  //     formatMessage: PropTypes.func.isRequired,
  //   })
  // ).isRequired,
  // captureSelectedPrivilegedSessionParams: PropTypes.func.isRequired,
  // showTemplateModal: PropTypes.func.isRequired,
  // activeSessionsSelected: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     instanceId: PropTypes.number.isRequired,
  //     privilegeId: PropTypes.number.isRequired,
  //     accountId: PropTypes.number.isRequired,
  //   })
  // ).isRequired,
  setShowPrivilegeRoleModal: PropTypes.func.isRequired,
};
export default injectIntl(SAPReserveSlot);
