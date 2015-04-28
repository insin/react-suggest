/*!
 * react-suggest 1.0.0 (dev build at Tue, 28 Apr 2015 12:35:26 GMT) - https://github.com/insin/react-suggest
 * MIT Licensed
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactSuggest = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null)

var SuggestionInput = React.createClass({displayName: "SuggestionInput",
  propTypes: {
    onChange: React.PropTypes.func.isRequired,

    className: React.PropTypes.string,
    component: React.PropTypes.any,
    suggestedValue: React.PropTypes.string
  },

  getDefaultProps:function() {
    return {
      className: 'SuggestionInput',
      component: 'div',
      suggestedValue: ''
    }
  },

  render:function() {
    var $__0=       this.props,children=$__0.children,className=$__0.className,component=$__0.component,size=$__0.size,suggestedValue=$__0.suggestedValue,inputProps=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{children:1,className:1,component:1,size:1,suggestedValue:1})
    return React.createElement(this.props.component, {className: className}, 
      /* Input the user actually interacts with */
      React.createElement("input", React.__spread({},  inputProps, 
        {autoComplete: "off", 
        className: (className + "__input"), 
        size: size, 
        spellCheck: "false"})
      ), 
      /* Input displaying suggestions inline */
      React.createElement("input", {
        autoComplete: "off", 
        className: (className + "__suggestion"), 
        onChange: function()  {}, 
        size: size, 
        tabIndex: "-1", 
        value: suggestedValue}
      ), 
      /* Hidden input to take up some vertial space */
      React.createElement("input", {
        className: (className + "__spacer"), 
        defaultValue: "", 
        size: size, 
        tabIndex: "-1"}
      )
    )
  }
})

module.exports = {SuggestionInput:SuggestionInput}
},{}]},{},[1])(1)
});