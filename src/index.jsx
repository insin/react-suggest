'use strict';

var React = require('react')

var SuggestionInput = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,

    className: React.PropTypes.string,
    component: React.PropTypes.any,
    suggestedValue: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      className: 'SuggestionInput',
      component: 'div',
      suggestedValue: ''
    }
  },

  render() {
    var {children, className, component, size, suggestedValue, ...inputProps} = this.props
    return <this.props.component className={className}>
      {/* Input the user actually interacts with */}
      <input {...inputProps}
        autoComplete="off"
        className={`${className}__input`}
        size={size}
        spellCheck="false"
      />
      {/* Input displaying suggestions inline */}
      <input
        autoComplete="off"
        className={`${className}__suggestion`}
        onChange={() => {}}
        size={size}
        tabIndex="-1"
        value={suggestedValue}
      />
      {/* Hidden input to take up some vertial space */}
      <input
        className={`${className}__spacer`}
        defaultValue=""
        size={size}
        tabIndex="-1"
      />
    </this.props.component>
  }
})

module.exports = {SuggestionInput}