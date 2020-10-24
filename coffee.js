import React, { useState } from 'react'
import PropTypes from 'prop-types'
const promise = new Promise((resolve, reject) => { resolve(); reject() })

const Query = class Query extends React.Component {
    constructor(props) {
        super()
    }
    $if() { // if result
        for (let i in this.props.children){ // childirens
            if (this.props.children[i].props.query === 'if') {
                return this.props.children[i]
            }
        }
    }
    $else() { // else result
        for (let i in this.props.children){
            if (this.props.children[i].props.query === 'else') {
                return this.props.children[i]
            }
        }
    }
    render() {
        const result = this.props.mode ? this.$if() : this.$else()
        return result
    }
}

const Component = class Component extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        const result = this.props.mode ? this.props.if : this.props.else
        return result
    }
}

const Class = (props) => {
    const {mode, querys, classes, defaultClass} = props

    for (const i in querys){
        if (mode === querys[i]){
            return classes[i].class
        } else {
            return defaultClass
        }
    }
}

Class.propTypes = {
    querys: PropTypes.array.isRequired,
    classes: PropTypes.array.isRequired
}

const State = (getState) => {
    const [state, setState] = useState(getState)

    const updateState = (newState) => {
        const cloneState = {}

        promise.then(() => {
            for (const stateProp in state){
                for (const newProp in newState){
                    if (newProp !== stateProp){
                        cloneState[stateProp] = state[stateProp]
                    } else {
                        cloneState[stateProp] = newState[newProp]
                    }

                    if (state[newProp] === undefined) {
                        cloneState[newProp] = newState[newProp]
                    }
                }
            }

        }).then(() => {
            setState(cloneState)
        })
    }

    return {
        updateState,
        state: state
    }
}

const Coffee = {
    Query,
    Component,
    Class,
    State
}

export default Coffee