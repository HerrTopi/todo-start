import { useState } from 'react'
import { Flex, Checkbox, IconButton, IconXSolid, Text } from '@instructure/ui'

const Item = ({ text }) => {

    const [done, setDone] = useState(false)


    return <div style={{
        minHeight: "50px",
        lineHeight: "50px",
        borderBottom: "solid",
        borderWidth: "1px",
        borderColor: "lightgrey",
        verticalAlign: "middle",
        wordWrap: "break-word"
    }}>
        <Flex>
            <Flex.Item size="40px" margin="small">
                <Checkbox
                    checked={done}
                    onChange={(e) => { setDone(!done) }}
                />
            </Flex.Item>
            <Flex.Item shouldGrow>
                <div style={done ? {
                    textDecoration: "line-through",
                    transition: "color 1s ease",
                    color: "lightgrey"
                } : {
                    transition: "color 1s ease",
                    color: "black"
                }}>
                    <Text size="large">{text}</Text>
                </div>
            </Flex.Item>
            <Flex.Item size="40px">
                <IconButton shape="rectangle" screenReaderLabel="Delete tag" margin="small">
                    <IconXSolid /></IconButton>
            </Flex.Item>
        </Flex>
    </div>
}

export default Item