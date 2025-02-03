export const fields: Record<string, FieldConfig> = {
  name: {
    required: true,
    min: 3,
    max: 100,
  },
  description: {
    required: true,
    min: 3,
    max: 1000,
  },
};

export const messages: Record<string, MessagesConfig> = {
  name: {
    required: "El título es requerido",
    min: "El título debe tener al menos 3 caracteres",
    max: "El título debe tener menos de 100 caracteres",
  },
  description: {
    required: "La descripción es requerida",
    min: "La descripción debe tener al menos 3 caracteres",
    max: "La descripción debe tener menos de 1000 caracteres",
  },
};

interface FieldConfig {
  required?: boolean;
  min?: number;
  max?: number;
}

interface MessagesConfig {
  required: string;
  min: string;
  max: string;
}

export const validate = (
  values: Record<string, string>
): Record<string, string> | null => {
  const errors: Record<string, string> = {};

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const value = values[key];

    if (field.required && !value) {
      errors[key] = messages[key].required;
    } else if (field.min !== undefined && value.length < field.min) {
      errors[key] = messages[key].min;
    } else if (field.max !== undefined && value.length > field.max) {
      errors[key] = messages[key].max;
    }
  });

  if (Object.keys(errors).length === 0) {
    return null;
  }

  return errors;
};
