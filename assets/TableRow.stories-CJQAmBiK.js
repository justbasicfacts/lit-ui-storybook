import{j as e}from"./iframe-BOtHSW94.js";import"./index-BSSMaTAd.js";import{c as r,T as t,a as d,b as c,d as a,e as b}from"./table-cell-0TaIbMlk.js";import"./preload-helper-Bs85Y4nq.js";const h=[{id:1,name:"Frozen yoghurt",calories:159,fat:6},{id:2,name:"Ice cream sandwich",calories:237,fat:9},{id:3,name:"Eclair",calories:262,fat:16},{id:4,name:"Cupcake",calories:305,fat:3.7}],C={title:"Components/Data display/TableRow",component:r,parameters:{layout:"padded"},argTypes:{hover:{control:"boolean"},selected:{control:"boolean"}},args:{hover:!0,selected:!1}},n={render:i=>e.jsx(t,{children:e.jsxs(d,{children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(a,{variant:"head",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",align:"right",children:"Calories"}),e.jsx(a,{variant:"head",align:"right",children:"Fat (g)"})]})}),e.jsx(b,{children:h.map((l,o)=>e.jsxs(r,{...o===1?i:{hover:!0},children:[e.jsx(a,{children:l.name}),e.jsx(a,{align:"right",children:l.calories}),e.jsx(a,{align:"right",children:l.fat})]},l.id))})]})})},s={args:{selected:!0},render:i=>e.jsx(t,{children:e.jsxs(d,{padding:"checkbox",children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(a,{variant:"head",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",align:"right",children:"Calories"})]})}),e.jsx(b,{children:h.map((l,o)=>e.jsxs(r,{...o%2===0?i:{hover:!0},children:[e.jsx(a,{children:l.name}),e.jsx(a,{align:"right",children:l.calories})]},l.id))})]})})},p=["Default","SelectedRows"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Dessert (100g serving)</TableCell>
            <TableCell variant="head" align="right">
              Calories
            </TableCell>
            <TableCell variant="head" align="right">
              Fat&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => <TableRow key={row.id} {...index === 1 ? args : {
          hover: true
        }}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  },
  render: args => <TableContainer>
      <Table padding="checkbox">
        <TableHead>
          <TableRow>
            <TableCell variant="head">Dessert (100g serving)</TableCell>
            <TableCell variant="head" align="right">
              Calories
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => <TableRow key={row.id} {...index % 2 === 0 ? args : {
          hover: true
        }}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...s.parameters?.docs?.source}}};export{n as Default,s as SelectedRows,p as __namedExportsOrder,C as default};
