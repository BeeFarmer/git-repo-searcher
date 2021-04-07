import React, { Fragment } from 'react'
import { string, func } from 'prop-types'

const InputField = ({
  value,
  onInputChange,
  onClickHandler,
}) => {
  return (
    <Fragment>
      <input
        className="search-input"
        value={value}
        placeholder="Type user name..."
        onChange={onInputChange}
      />
      <button
        className="search-button"
        onClick={onClickHandler}
      >
        Search
      </button>
    </Fragment>
  )
}

InputField.propTypes = {
  value: string,
  onInputChange: func.isRequired,
  onClickHandler: func.isRequired,
}

InputField.defaultProps = {
  value: '',
}

export default InputField
