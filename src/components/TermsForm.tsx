import { SubmitHandler, useForm } from "react-hook-form"
import { AgreeTerms } from "@/types"
import { Box, Button, Container } from "@mui/material"

const TermsForm = ({ clickOn, clickOff }: { clickOn: () => void, clickOff: () => void }) => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
        }
    } = useForm<AgreeTerms>()
    const onSubmit: SubmitHandler<AgreeTerms> = (data) => {
        console.log(data)
        alert("送信しました")
    }

    return (
        <Container>
            <Box component="form" display="flex" flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    名前:
                    <input style={{ outline: "none" }} type="text"
                        id="name"
                        {...register("name", {
                            required: true,
                            maxLength: {
                                value: 20,
                                message: "最大20文字です"
                            }
                        })}
                    />
                </label>
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                <label htmlFor="date">
                    同意日:
                    <input type="date"
                        id="date"
                        {...register("date", { required: true })}
                    />
                </label>
                {errors.date &&
                    <span className="text-red-500">日付を選んで下さい</span>
                }
                <Button type="submit">
                    同意して送信する
                </Button>
                <Button onClick={clickOn}>
                    ボタン
                </Button>
                <Button onClick={clickOff}>
                    offボタン
                </Button>
            </Box>
        </Container>
    )
}

export default TermsForm