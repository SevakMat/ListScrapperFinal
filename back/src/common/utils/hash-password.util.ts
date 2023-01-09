import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string, saltOrRounds: number = 10): Promise<string> => {
  return await bcrypt.hash(password, saltOrRounds);
};