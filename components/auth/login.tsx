'use client'

import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { Text, Paper, PaperProps, Button, Divider } from '@mantine/core'
import { AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

export default function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register'])
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  })

  return (
    <div>
      <h1 className="text-7xl font-bold text-white mb-4">Happening now</h1>
      <h2 className="text-white text-3xl font-bold mb-8">
        Join <span>Twitter</span> today.
      </h2>
      <Paper
        radius="md"
        p="xl"
        {...props}
        bg={'black'}
        className="max-w-[22rem]"
      >
        <div className="flex flex-col gap-2">
          <Button
            variant="white"
            color="black"
            className="font-bold"
            radius="xl"
            leftSection={
              <FcGoogle
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            }
          >
            Sign up with Google
          </Button>
          <Button
            variant="white"
            color="black"
            className="font-bold"
            radius="xl"
            leftSection={
              <AiFillApple
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            }
          >
            Sign up with Apple
          </Button>
        </div>

        <Divider label="Or" labelPosition="center" my="lg" />
        <div className="flex flex-col gap-2">
          <Button variant="filled" radius="xl" className="w-full">
            Create Account
          </Button>
          <p className=" text-white text w-[17rem] text-xs font-thin">
            By signing up, you agree to the{' '}
            <span className="text-blue-500 cursor-pointer">
              Terms of Service
            </span>{' '}
            and
            <span className="text-blue-400 cursor-pointer">Privacy Policy</span>
            , including{' '}
            <span className="text-blue-400 cursor-pointer">Cookie Use</span>.
          </p>
        </div>
      </Paper>
    </div>
  )
}
