import { Button, ButtonProps } from '@mantine/core'
import { AiFillApple } from 'react-icons/ai'

export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
  return (
    <Button
      leftSection={
        <AiFillApple
          style={{
            width: 50,
            height: 50,
          }}
        />
      }
      variant="default"
      {...props}
    />
  )
}
