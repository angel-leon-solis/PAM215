public class encontrarm{
    public static int encontrar(int elemento, int [][]m){ 
      int suma =0;
        for(int i=1; i<m.length-1; i++){
            for(int j=1; j<m[i].length-1; j++){
                
                suma += m[i][j];
            }
         }
        return suma;
    }
    public static void main(String[] args) {
        int matriz[][]= {
            {1,2,3,4},
            {9,7,4,5},
            {1,3,7,4}
        };
        System.out.println(encontrar(matriz));
        System.out.println(encontrar(matriz));
    }
 }

