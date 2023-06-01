import { type FC, useEffect, useState } from "react"
import { Button } from "shared/ui/Button/Button"
import { useTranslation } from "react-i18next"

export const BugButton: FC = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error("yep, here the error is!")
    }
  }, [error])

  const onThrow = (): void => { setError(true) }

  return (
      <Button onClick={onThrow}>
          {t("throw an error!")}
      </Button>
  )
}
