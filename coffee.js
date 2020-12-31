import React, { useState } from 'react'

class Query extends React.Component {
    constructor(props) {
        super()

        this.state = {
            childs: {}
        }
    }

    querysResults = _ => {
        let result = []

        for (const prop in this.props.children){
            result.push(this.props.children[prop].props.query)
        }
        
        return result
    }

    componentDidMount() {
        const querys = this.querysResults()

        const childsResults = _ => {
            let result = {}

            for (let childCount in this.props.children) {
                for (let queryCount in querys) {
                    if (this.props.children[childCount].props.query == querys[queryCount]) {
                        result[`${querys[queryCount]}`] = this.props.children[childCount]
                    }
                }
            }

            return result
        }

        this.setState({ childs: childsResults() })
    }

    consumer() {
        for (let count in this.props.children) {
            if (this.state.childs[this.props.children[count].props.query] !== undefined) {
                //const query = this.state.childs[this.props.children[count].props.query]
                if (`${this.props.mode}` == this.props.children[count].props.query) {
                    return this.state.childs[this.props.mode]
                }

            }
        }
    }

    render() {
        return <span> {this.consumer()} </span>
    }
}

class Component extends React.Component {
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

const State = (getState, historyMode) => {
    const [state, updateState] = useState(getState)

    const setState = (newState) => {
        const cloneState = {}

        for (const stateProp in state){
            for (const newProp in newState){
                if (newProp !== stateProp){
                    cloneState[stateProp] = state[stateProp]
                } else {
                    cloneState[stateProp] = newState[newProp]

                    if(historyMode) {
                        setHistory(newProp, 'update', newState[newProp])
                    }
                }

                if (state[newProp] === undefined) {
                    cloneState[newProp] = newState[newProp]

                    if(historyMode) {
                        setHistory(newProp, 'add', newState[newProp])
                    }
                }
            }
        }
        
        updateState(cloneState)
    }

    const setHistory = (propName, mode, value) => {
        const history = {}
        
        history.mode = mode
        history.variable = propName
        history.value = value
    }

    return {
        setState,
        state,
    }
}

export default {
    Query,
    Component,
    Class,
    State
}