import { Button, ButtonProps } from '@mantine/core'
import { AiFillApple } from 'react-icons/ai'

export function AppleBtn(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
  return (
    <Button
      leftSection={
        <AiFillApple
          style={{
            width: 30,
            height: 30,
          }}
        />
      }
      variant="default"
      {...props}
    />
  )
}
