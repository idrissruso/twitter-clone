import { Button, ButtonProps } from '@mantine/core'
import { FcGoogle } from 'react-icons/fc'

export function GmailBtn(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
  return (
    <Button
      className="bg-white text-black font-semibold"
      leftSection={
        <FcGoogle
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
