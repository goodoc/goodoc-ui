import Alert, { useAlert } from '.';
import Button from '../../input/button'

export default {
  title: 'popup/alert',
  component: Alert,
}

export const Basic = () => {
  const { open, alert } = useAlert({ message: 'Are you sure?'})
  return (
    <>
    <Button size="large" onClick={() => open()} text="Open alert"/>
    {alert}
    </>
  )
}