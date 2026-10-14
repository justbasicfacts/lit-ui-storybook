import{j as e}from"./iframe-Bwx-W2wi.js";import"./index-BSSMaTAd.js";import{T as d}from"./table-footer-ChqF1570.js";import{T as c,a as T,b as h,c as n,d as l,e as b}from"./table-cell-jLg_Tecp.js";import"./preload-helper-Bs85Y4nq.js";const o=[{id:1,name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{id:3,name:"Eclair",calories:262,fat:16,carbs:24,protein:6}],p={title:"Components/Data display/TableFooter",component:d,parameters:{layout:"padded"},args:{}},i={render:t=>e.jsx(c,{children:e.jsxs(T,{children:[e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(l,{variant:"head",children:"Dessert (100g serving)"}),e.jsx(l,{variant:"head",align:"right",children:"Calories"}),e.jsx(l,{variant:"head",align:"right",children:"Fat (g)"})]})}),e.jsx(b,{children:o.map(a=>e.jsxs(n,{hover:!0,children:[e.jsx(l,{children:a.name}),e.jsx(l,{align:"right",children:a.calories}),e.jsx(l,{align:"right",children:a.fat})]},a.id))}),e.jsx(d,{...t,children:e.jsxs(n,{children:[e.jsx(l,{children:"Total"}),e.jsx(l,{align:"right",children:o.reduce((a,r)=>a+r.calories,0)}),e.jsx(l,{align:"right",children:o.reduce((a,r)=>a+r.fat,0)})]})})]})})},s={render:t=>e.jsx(c,{children:e.jsxs(T,{children:[e.jsx(b,{children:o.map(a=>e.jsxs(n,{hover:!0,children:[e.jsx(l,{children:a.name}),e.jsx(l,{align:"right",children:a.calories})]},a.id))}),e.jsx(d,{...t,children:e.jsxs(n,{children:[e.jsx(l,{variant:"footer",children:"Total calories"}),e.jsx(l,{variant:"footer",align:"right",children:o.reduce((a,r)=>a+r.calories,0)})]})})]})})},w=["Default","FooterVariant"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter {...args}>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">
              {rows.reduce((sum, row) => sum + row.calories, 0)}
            </TableCell>
            <TableCell align="right">
              {rows.reduce((sum, row) => sum + row.fat, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer>
      <Table>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter {...args}>
          <TableRow>
            <TableCell variant="footer">Total calories</TableCell>
            <TableCell variant="footer" align="right">
              {rows.reduce((sum, row) => sum + row.calories, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
}`,...s.parameters?.docs?.source}}};export{i as Default,s as FooterVariant,w as __namedExportsOrder,p as default};
