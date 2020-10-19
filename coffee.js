import React from 'react'
import PropTypes from 'prop-types'

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
    const {mode, querys, classes} = props

    for (const i in querys){
        if (mode === querys[i]){
            return classes[i].class
        }
    }
}

Class.propTypes = {
    querys: PropTypes.array.isRequired,
    classes: PropTypes.array.isRequired
}

const Coffee = { 
    Query: Query,
    Component: Component,
    Class: Class,
}

export default Coffee