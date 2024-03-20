import Card from '@mui/material/Card'

import FormLayoutsSeparator from '@views/forms/form-layouts/FormLayoutsSeparator'
import StepperVerticalWithNumbers from '@views/forms/form-wizard/StepperVerticalWithNumbers'

export default function Page() {
  return (
    <Card>
      <FormLayoutsSeparator />
      <StepperVerticalWithNumbers />
    </Card>
  )
}
