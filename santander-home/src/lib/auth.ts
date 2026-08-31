export type LoginResult = { ok: true } | { ok: false; message: string }

const CPF_LENGTH = 11

export function formatCpf(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, CPF_LENGTH)
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d{1,2})$/, '.$1-$2')
}

export function isValidCpf(cpf: string): boolean {
  const digits = cpf.replace(/\D/g, '')
  if (digits.length !== CPF_LENGTH || /^(\d)\1{10}$/.test(digits)) return false
  for (const length of [9, 10]) {
    let sum = 0
    for (let i = 0; i < length; i++) {
      sum += Number(digits[i + 1]) * (length + 1 - i)
    }
    const check = ((sum * 10) % 11) % 10
    if (check !== Number(digits[length])) return false
  }
  return true
}

export function login(cpf: string): LoginResult {
  if (!isValidCpf(cpf)) {
    return {
      ok: false,
      message: 'CPF inválido. Confira o número digitado e tente novamente.',
    }
  }
  return { ok: true }
}
