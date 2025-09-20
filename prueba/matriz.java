//obtener la columna de la ultima aparicion de un elemento en una matriz si el elemento a buscar no se encuentra regresar -1}
 
public class matriz{
    public static int ultAparicion(int elemento, int [][]m){ 
      int columna =-1;
        for(int i=0; i<m.length; i++){
            for(int j=0; j<m[i].length; j++){
                if (elemento == m[i][j]){
                    columna = j;
                }
                
            }
         }
         return columna;
    }
    public static void main(String[] args) {
        int matriz[][]= {
            {1,2,3,4},
            {9,7,4,5},
            {1,3,7,4}
        };
        System.out.println(ultAparicion(2, matriz));
        System.out.println(ultAparicion(23, matriz));
    }
 }

