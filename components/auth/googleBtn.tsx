import { Button, ButtonProps } from '@mantine/core'
import { FcGoogle } from 'react-icons/fc'

function GoogleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <FcGoogle {...props} />
}

export function GoogleButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>
) {
  return <Button leftSection={<GoogleIcon />} variant="default" {...props} />
}
