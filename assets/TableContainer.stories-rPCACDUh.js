import{j as e}from"./iframe-CwpzPtni.js";import"./index-qmVU2qX3.js";import{T as t,a as o,b as d,c as i,d as a,e as h}from"./table-cell-DMcWhgNf.js";import"./preload-helper-Bs85Y4nq.js";const b=[{id:1,name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{id:3,name:"Eclair",calories:262,fat:16,carbs:24,protein:6}],x={title:"Components/Data display/TableContainer",component:t,parameters:{layout:"padded"},args:{}},n={render:s=>e.jsx(t,{...s,children:e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(i,{children:[e.jsx(a,{variant:"head",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",align:"right",children:"Calories"}),e.jsx(a,{variant:"head",align:"right",children:"Fat (g)"})]})}),e.jsx(h,{children:b.map(l=>e.jsxs(i,{hover:!0,children:[e.jsx(a,{children:l.name}),e.jsx(a,{align:"right",children:l.calories}),e.jsx(a,{align:"right",children:l.fat})]},l.id))})]})})},r={render:s=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(t,{...s,children:e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(i,{children:[e.jsx(a,{variant:"head",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",align:"right",children:"Calories"}),e.jsx(a,{variant:"head",align:"right",children:"Fat (g)"}),e.jsx(a,{variant:"head",align:"right",children:"Carbs (g)"}),e.jsx(a,{variant:"head",align:"right",children:"Protein (g)"})]})}),e.jsx(h,{children:b.map(l=>e.jsxs(i,{hover:!0,children:[e.jsx(a,{children:l.name}),e.jsx(a,{align:"right",children:l.calories}),e.jsx(a,{align:"right",children:l.fat}),e.jsx(a,{align:"right",children:l.carbs}),e.jsx(a,{align:"right",children:l.protein})]},l.id))})]})})})},m=["Default","HorizontalScroll"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer {...args}>
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
      </Table>
    </TableContainer>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 360
  }}>
      <TableContainer {...args}>
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
              <TableCell variant="head" align="right">
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell variant="head" align="right">
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.id} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
}`,...r.parameters?.docs?.source}}};export{n as Default,r as HorizontalScroll,m as __namedExportsOrder,x as default};
