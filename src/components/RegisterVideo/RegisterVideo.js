import { useState } from "react"
import { StyledRegisterVideo } from "./styles"

function useForm(propsForm) {
    const [values, setValues] = useState(propsForm.initialValues)

    return {
        values,
        handleChange: (event) => {
            const value = event.target.value
            const name = event.target.value
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm() {
            setValues({})
        }
    }
}

function RegisterVideo() {
    const formCadastre = useForm({
        initialValues: { titulo: "", url: "" }
    })
    const [formVisible, setFormVisible] = useState(false)

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisible(true)}>
                +
            </button>
            {formVisible
                ? (
                    <form onSubmit={(event) => {
                        event.preventDefault()

                        setFormVisible(false)
                        formCadastre.clearForm()
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisible(false)}>
                                X
                            </button>
                            <input placeholder="Titulo de vídeo" name="title" value={formCadastre.values.titulo} onChange={formCadastre.handleChange} />
                            <input placeholder="URL" name="url" value={formCadastre.values.url} onChange={formCadastre.handleChange} />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}

        </StyledRegisterVideo>

    )
}

export default RegisterVideo