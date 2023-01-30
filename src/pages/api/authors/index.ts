import { NextApiResponse, NextApiRequest } from 'next'

const authors = [
  {
    name: 'Austin Santos',
    id: 'A5673E58-3DD2-0B54-579E-BADC9C179EF8'
  },
  {
    name: 'Cameran da Rosa',
    id: 'A05859D1-47F3-4819-ABBB-9565291B178C'
  },
  {
    name: 'Isabella Medeiros',
    id: '03AD11DB-DFDA-A329-4B61-E767D233344A'
  },
  {
    name: 'Tasha Melo',
    id: 'C475B932-3385-72BB-C54C-4D0E55DDF37D'
  },
  {
    name: 'Owen Domingues',
    id: '85C802D4-4183-E4BD-654A-D8987831756A'
  },
  {
    name: 'Colleen Cardoso',
    id: '0B2D5AE4-5E70-D741-AECD-7491486F4939'
  },
  {
    name: 'Dorian Camargo',
    id: 'DC8454F0-9C24-5FBC-12B2-CD1D9CFF5B62'
  },
  {
    name: 'Deacon Paulino',
    id: '9BBE21C5-B87D-EDEA-80A5-8652B285C7BD'
  },
  {
    name: 'Geraldine Menezes',
    id: 'EB43C979-CAAD-C6B4-5EEE-97B64AA3309D'
  },
  {
    name: 'Sierra Moreira',
    id: '3B43A6A0-874C-36BA-6AEE-896C2F79A74C'
  },
  {
    name: 'Rafael Bastos',
    id: '6DCA9ED6-D771-AA78-E178-02148E21B7C8'
  },
  {
    name: 'Colton da Cunha',
    id: 'DE242583-F121-1D99-D53B-E1FCDA3AA85B'
  },
  {
    name: 'Isabelle Freitas',
    id: 'D76457D1-3C88-A8CB-3AF6-6E41BCFD6434'
  },
  {
    name: 'Anthony Furtado',
    id: 'AE2446B6-C679-299D-8DCD-C36CF541BD01'
  },
  {
    name: 'Nicole Borges',
    id: '59B40816-D90A-3C15-3317-DCD100C7BE7E'
  },
  {
    name: 'Davis de Campos',
    id: '7747B7B6-6D3A-4AF3-98D9-1CA4D9B5D889'
  },
  {
    name: 'Myra Sántos',
    id: 'ABBC4CFB-DBED-F8DB-CA51-46E49AA0CBA0'
  },
  {
    name: 'Shaeleigh Almeida',
    id: '5D411C32-4CED-86E9-E37C-52D28E1F6F08'
  },
  {
    name: 'Noelani Braga',
    id: '880389EE-7129-F6E8-1192-35462DE6DE62'
  },
  {
    name: 'Cara Carneiro',
    id: 'C532ADC3-F8AE-A5A9-5A3C-1AA8361A617C'
  },
  {
    name: 'Isabella Barreto',
    id: '132A1ED4-5EE5-ACCE-B614-B7D9C369FC06'
  },
  {
    name: 'Julian Campos',
    id: '8F520089-6ADA-92D7-AD18-13E81F89FB32'
  },
  {
    name: 'Rana Evangelista',
    id: '8DD1A0B6-129F-2C85-A941-3B814B871163'
  },
  {
    name: 'Katell Mota',
    id: '1C7A3EE2-43AD-E13B-18C4-E321F879B44B'
  },
  {
    name: 'Jakeem de Santana',
    id: '669B4244-F7AE-2224-6292-786B7A048745'
  },
  {
    name: 'Dorothy Moraes',
    id: 'FAD6C5F3-2747-13DD-1E97-6A18DA3818B4'
  },
  {
    name: 'Murphy dos Reis',
    id: '17FC02E2-FA90-0335-B78E-DC9B8F82A4D3'
  },
  {
    name: 'Lester Dutra',
    id: 'A0DB2792-EB9C-FC95-BCA5-CAA6A95154C4'
  },
  {
    name: 'Tatyana Das Gracas',
    id: '89327AAE-3E0A-B333-CD57-0D861A816FD6'
  },
  {
    name: 'Ivan Amorim',
    id: '2BB48576-B9CF-3E1C-9473-4CC7C9F5FED5'
  },
  {
    name: 'Alexandra dos Santos',
    id: 'F8F6255E-115A-614D-84B1-A7E568922384'
  },
  {
    name: 'Avram Araujo',
    id: '3BE5D8BB-E428-6523-5E7E-EEAAC9E51735'
  },
  {
    name: 'Jerome da Rocha',
    id: 'DC78D53B-07E4-9BB3-5BD1-FD216236BDE1'
  },
  {
    name: 'Aladdin Menezes',
    id: '1B68728B-BB69-E656-8A66-B288F6689578'
  },
  {
    name: 'Holly Caetano',
    id: 'C20FC290-ABB4-DCA1-D9E7-3C9A6E8E7514'
  },
  {
    name: 'Risa Viana',
    id: 'E9BBDDD6-F7C8-EAAF-DA32-E43AE92502D3'
  },
  {
    name: 'Constance Santana',
    id: '84CEE8AF-149B-FD88-8B3C-A4C468A5A143'
  },
  {
    name: 'Colorado Guedes',
    id: '462DA134-D934-B28B-D1C2-0BE27D0AEDCD'
  },
  {
    name: 'Fiona Pacheco',
    id: 'A859B004-6C79-DF1F-AA51-BE99C06388F5'
  },
  {
    name: 'Cedric Leal',
    id: 'C8B57FCA-0255-591A-DB4E-E0F32A1E1AB4'
  },
  {
    name: 'Derek Felix',
    id: 'ABC04789-FFCB-7D6A-BA5C-67E03753E9F2'
  },
  {
    name: 'Devin Dantas',
    id: '7B2657D4-FC64-9758-BD91-56D32E8D8430'
  },
  {
    name: 'Tiger Lima',
    id: '5DA9D3C5-4A76-7AB6-EBCA-B891C2A5A434'
  },
  {
    name: 'Elliott Carneiro',
    id: '32B44CC8-49D4-681C-C95B-ECC9EDCB5979'
  },
  {
    name: 'Felicia Correa',
    id: '88B95565-3623-2597-1002-819DD8F9AE76'
  },
  {
    name: 'Kieran de Matos',
    id: 'DC79229B-CCC1-3D84-02EE-85D5D66CF8E9'
  },
  {
    name: 'Charity Guedes',
    id: 'D147E26E-C894-7571-4987-1412479BB39B'
  },
  {
    name: 'Hakeem Azevedo',
    id: 'B1311E1B-674E-042A-5E8D-52AE2BB9EDB9'
  },
  {
    name: 'Glenna Cordeiro',
    id: '77569743-9401-380C-10B8-BC555647B6E4'
  },
  {
    name: 'Camden da Cruz',
    id: '9E0803F8-D64F-57DC-917A-914B38747B95'
  }
]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<unknown[]>
) {
  return res.status(200).json(authors)
}
