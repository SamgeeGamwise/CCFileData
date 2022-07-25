import React, { useState, useEffect } from 'react'
import Assessments from '../assessments/index.js'

export default function Client(props) {

    return (
        <>
            <Assessments assessments={props.assessments} clientId={props.clientId} />
        </>
    )
}
