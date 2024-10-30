import { useMemo } from "react"

export function hasInvalidMsg(inputTitle, input, funcArr) {
    let msg = ''
    for (const func of funcArr) {
        const result = func(inputTitle, input)
        if (!result[0]) {
            msg = result[1]
            break
        }
    }
    return msg
}

export function isNotNull(inputTitle, inputVal) {
    if (inputVal !== '')
        return [true]
    else
        return [
            false,
            `${inputTitle} can't be null!`
        ]
}

export function ErrorMsg({ msg }) {
    return (
        <div style={{ color: 'red', height: '30px' }}>
            <b style={{ display: 'block', marginTop: '.75rem' }}>{msg}</b>
        </div>
    )
}

export function useValidate(inputTitle, inputVal, funcArr) {
    const invalidAuthorMsg = useMemo(
        () => hasInvalidMsg(inputTitle, inputVal, funcArr),
        [inputVal])

    return invalidAuthorMsg
}

