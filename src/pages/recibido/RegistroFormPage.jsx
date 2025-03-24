import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";

export function RegistroFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await CreateRegistro(data);
    console.log(res);
  });

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        {/* Referencia */}
        <input
          type="text"
          placeholder="Referencia"
          {...register("referencia", { required: true })}
        />
        {errors.referencia && (
          <span style={{ color: "red" }}>Este campo es requerido</span>
        )}
        {/* Fojas */}
        <input
          type="number"
          placeholder="Fojas"
          {...register("fojas", { required: true })}
        />
        {errors.fojas && (
          <span style={{ color: "red" }}>Este campo es requerido</span>
        )}
        {/* Adjunto (Archivo) */}
        <input type="file" {...register("adjunto", { required: true })} />
        {errors.adjunto && (
          <span style={{ color: "red" }}>Este campo es requerido</span>
        )}
        {/* Detalle */}
        <textarea
          placeholder="Detalle"
          {...register("detalle", { required: true })}
        ></textarea>
        {errors.detalle && (
          <span style={{ color: "red" }}>Este campo es requerido</span>
        )}
        {/* Estado de Entrega (Checkbox) */}
        <label>
          <input type="checkbox" {...register("estadoEntrega")} />
          Entregado
        </label>
        {/* Destinatarios (IDs separados por comas) */}
        <input
          type="text"
          placeholder="Destinatarios (IDs separados por comas)"
          {...register("destinatarios", { required: true })}
        />
        {errors.destinatarios && (
          <span style={{ color: "red" }}>Este campo es requerido</span>
        )}
        {/* Estado de Lectura (Checkbox) */}
        <label>
          <input type="checkbox" {...register("estadoLectura")} />
          Leído
        </label>
        {/* Tipo de Documento (Select) */}
        <select {...register("tipoDocumento", { required: true })}>
          <option value="">Selecciona Tipo de Documento</option>
          <option value="Informe">Informe</option>
          <option value="Contrato">Contrato</option>
          <option value="Memorándum">Memorándum</option>
        </select>
        {errors.tipoDocumento && (
          <span style={{ color: "red" }}>Este campo es requerido</span>
        )}
        {/* Prioridad (Select) */}
        <select {...register("prioridad", { required: true })}>
          <option value="Normal">Normal</option>
          <option value="Alta">Alta</option>
          <option value="Baja">Baja</option>
        </select>
        {/* Comentarios */}
        <textarea
          placeholder="Comentarios (Opcional)"
          {...register("comentarios")}
        ></textarea>
        {/* Fecha Límite */}
        <input type="date" {...register("fechaLimite")} />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
