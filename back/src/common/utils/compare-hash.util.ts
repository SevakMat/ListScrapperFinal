import * as bcrypt from 'bcrypt';


export const compareHash = async(password: string, salt: string): Promise<boolean> => {
  return await bcrypt.compare(password, salt);
}