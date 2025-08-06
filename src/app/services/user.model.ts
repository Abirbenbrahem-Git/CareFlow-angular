export interface User {
  cin: number;
  nom: string;
  prenom: string;
  mail: string;
  numtel: number;
  motdepasse: string;
  residence: string;
  role: 'agent' | 'responsable' | 'admin';
}
