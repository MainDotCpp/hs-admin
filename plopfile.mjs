export default function Plopfile(plop) {
  plop.setGenerator('view', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '业务名',
      },
      {
        type: 'input',
        name: 'comment',
        message: '注释',
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: '_templates/curd',
        destination: 'src',
        force: true,
        templateFiles: '_templates/curd',
      },
      {
        type: 'modify',
        pattern: /};\n};/gm,
        templateFile: '_templates/permission.js.hbs',
        path: 'src/access.ts',
      },
      {
        type: 'modify',
        pattern: /};\n};/gm,
        templateFile: '_templates/router.js.hbs',
        path: 'umirc.ts',
      },
    ],
  });
};