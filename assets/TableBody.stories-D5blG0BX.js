import{j as e}from"./iframe-BOtHSW94.js";import"./index-BSSMaTAd.js";import{e as o,T as t,a as d,b as c,c as s,d as a}from"./table-cell-0TaIbMlk.js";import"./preload-helper-Bs85Y4nq.js";const b=[{id:1,name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{id:3,name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{id:4,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3}],m={title:"Components/Data display/TableBody",component:o,parameters:{layout:"padded"},args:{}},r={render:i=>e.jsx(t,{children:e.jsxs(d,{children:[e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(a,{variant:"head",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",align:"right",children:"Calories"}),e.jsx(a,{variant:"head",align:"right",children:"Fat (g)"})]})}),e.jsx(o,{...i,children:b.map(l=>e.jsxs(s,{hover:!0,children:[e.jsx(a,{children:l.name}),e.jsx(a,{align:"right",children:l.calories}),e.jsx(a,{align:"right",children:l.fat})]},l.id))})]})})},n={render:i=>e.jsx(t,{children:e.jsxs(d,{children:[e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(a,{variant:"head",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",align:"right",children:"Calories"})]})}),e.jsx(o,{...i,children:e.jsx(s,{children:e.jsx(a,{colSpan:2,align:"center",children:"No desserts found."})})})]})})},C=["Default","Empty"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        <TableBody {...args}>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Dessert (100g serving)</TableCell>
            <TableCell variant="head" align="right">
              Calories
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody {...args}>
          <TableRow>
            <TableCell colSpan={2} align="center">
              No desserts found.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Empty,C as __namedExportsOrder,m as default};
